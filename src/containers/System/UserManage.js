import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import ModalUser from "./ModelUser"
import ModalEditUser from './ModalEditUser';
import { getAllUsers, createUser, deleteUserService, editUserService } from '../../services/userService'
import { bind, reject } from 'lodash';
import { emitter } from '../../utils/emmiter';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }
    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log('get user from nodejs :', response)
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })

    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createUser(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact()
                alert('tạo thành công');
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (error) {
            reject(error)
        }
    }


    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact()
                alert('xóa thành công');
            } else {
                alert(res.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }


    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false,
                })
                alert('Lưu ngon r')
            } else {
                alert(res.errMessage)
            }
            await this.getAllUsersFromReact();
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleff={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggless={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className='title text-center mt-20'>Quản lý người dùng</div>
                <div className='search'>
                <i className="fas fa-search"></i>
                <input type='text' placeholder='Tìm kiếm ...' />
               </div>
                <div className="mx-1 mt-2">
                    <button onClick={() => this.handleAddNewUser()} className="btn btn-primary px-3"> <i className="fas fa-plus-circle"> Thêm người dùng</i></button>
                </div>
                <div className="mx-1 mt-2">
                    <button onClick={() => this.handleAddNewUser()} className="btn btn-primary px-3"><i className="fas fa-file"></i> Xuất thông tin</button>
                </div>
                <div className='users-table  mt-4 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Họ và Tên</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Vai trò</th>
                                <th>Thông tin thêm</th>
                                <th>Hành động</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.username}</td>
                                        <td>{item.password}</td>
                                        <td>{item.role}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
