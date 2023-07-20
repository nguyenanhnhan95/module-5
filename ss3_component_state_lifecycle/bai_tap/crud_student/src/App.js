import React,{Component} from "react";
class StudentManagement extends Component{
    constructor(props){
        super(props)
        this.setState={
            stydentList:[{
                name:"stu1",
                phone:"0125468576",
                email:"stu1@gmail.com"
            },
            {
                name:"stu2",
                phone:"0125468545",
                email:"stu2@gmail.com"
            },
            ],
           form:{name:"",phone:"",email:""},
           isValid:false,
           indexSelected:-1,
        }
    }
    handleIdChane=(event)=>{
        this.setState((state)=>{
            const form =state.form
            form[event.target.name]=event.target.value
            return {form}
        },()=>this.checkInvalidForm())
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
          form: JSON.parse(JSON.stringify(studentSelected)),
          indexSelected: index
        })
      }
}