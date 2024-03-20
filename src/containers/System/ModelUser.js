
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { emitter } from '../../utils/emmiter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            password: '',
            email: '',
            role: '',
            description: '',
        }
        this.listenToEmiiter();
    }

    listenToEmiiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                fullname: '',
                username: '',
                password: '',
                email: '',
                role: '',
                description: '',
            })
        })
    }

    componentDidMount() {
        
    }

    toggle = () => {
        this.props.toggleff();
    }

    handleOnchangeInput = (event, id) => {

        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })
    }
    // fullname: '',
    // username: '',
    // password: '',
    // email: '',
    // role: '',
    // descriotion: '',
    checkValidateInput = () => {
        let check = true
        let arrInput = ['fullname', 'username', 'password', 'email','description'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                check = false
                alert('Thiếu phần: ' + arrInput[i]);
                break;
            }
        }
        return check
    }
    handleAddNewUser = () => {
        let check = this.checkValidateInput();
        if (check === true) {
            //call api create
            this.props.createNewUser(this.state)
        }
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen} togle={() => { this.toggle() }} className={'ModalContainer'}
                size="lg"
            >
                <ModalHeader togle={() => { this.toggle() }}>
                    Tạo tài khoản
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Họ và Tên</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "fullname") }} value={this.state.fullname} />
                        </div>
                        <div className='input-container'>
                            <label>Tài khoản</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "username") }} value={this.state.username} />
                        </div>
                        <div className='input-container'>
                            <label>Mật khẩu</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "password") }} value={this.state.password} />
                        </div>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email' onChange={(event) => { this.handleOnchangeInput(event, "email") }} value={this.state.email} />
                        </div>
                        <div className='input-container'>
                            <label>Thông tin thêm</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "description") }} value={this.state.description} />
                        </div>
                        <div className='input-container'>
                            <label>Vai trò</label>
                            <select className="role">
                                 <option value="1">Admin</option>
                                 <option value="2">User</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' className='px-3' onClick={() => { this.handleAddNewUser() }}> Xác nhận</Button>{' '}
                    <Button color='secondary' className='px-3' onClick={() => { this.toggle() }}> Đóng</Button>
                </ModalFooter>
            </Modal>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



