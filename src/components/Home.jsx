import './home.css';
import {
  Input,Select,InputRightElement,Button,InputGroup
} from '@chakra-ui/react'

import {Link} from 'react-router-dom'

import {useState} from "react"

import { useForm } from "react-hook-form"



export const Home = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="mainDiv">
            <div className="leftDiv">
                <div className="inputDiv">
                    <p className="heading">Let's set up your account</p>
                    <p style={{color: '#707070',marginTop:"8%"}}>Already have an account? <Link to="/signup" style={{color: '#276EFA'}}>Sign in</Link></p>
                     <form style={{marginTop:"3%"}} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            className="input"
                        id='name'
                        type='name'
                            placeholder="Your name"
                             {...register("name", { required: true})}
                        />
                        {errors.name && <p className="errFormat">Please fill your name</p>}
                        <Input
                        className="input"
                        id='email'
                        type='email'
                            placeholder="Email address"
                              {...register("email", 
                        { 
                            required: true,  
                          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                           
                        })}
                        />
                          {errors.email && <p className="errFormat">Please enter a valid email address</p>}
                         <Select id='user' type='user' placeholder='I would describe my user type as' className="input"   {...register("user", { required: true})}>
                            <option>Admin</option>
                            <option>User</option>
                        </Select>
                         {errors.user && <p className="errFormat">User type is required</p>}
                          <InputGroup size='md' className="input">
                         <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                                placeholder='Password'
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
                                })}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        {errors.password && <p className="errFormat">Password Should be in "Abcd@1234" format. </p>}
                        <Button type="submit" width='100%' className="nextBtn" colorScheme="blue">Next</Button>
                    </form>
                    <p style={{color: '#707070',marginTop:"5%",fontSize: "12px",fontWeight:"500"}}>By clicking the "Next" button, you agree to creating a free account, and to <span style={{color: '#276EFA'}}>Terms of Service</span> and <span style={{color: '#276EFA'}}>Privacy Policy.</span></p>
               </div>

            </div>
            <div className="rightDiv">
                <div className="BsfDiv">
                    <img src="https://user-images.githubusercontent.com/87421852/160456080-da576882-90a3-48bc-87f3-186a52508850.svg" alt="bsf" />
                <p className="headBsf">Helping Businesses Grow Online with Simplified Solutions</p>
                </div>
            </div>
        </div>
    )
}




