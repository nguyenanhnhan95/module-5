import { ErrorMessage,Formik,Form,Field } from "formik"
import *as yup from "yup";
const statusHealths=["Sốt","Ho","Khó thở","Viêm Phổi","Đau Họng","Mệt mỏi"];
const contactPersons=["Người bệnh hoặc nghi ngờ", "mắc bệnh COVID-19","Người từ nước có bệnh COVID-19",
"Người có biểu hiện ( Sốt,ho,khó thở,viêm phổi)"]
const Set_List=[{label:"Nam",value:"male"},{label:"Nữ",value:"female"},{label:"Không chọn",value:""}]
function FormHealth(){
    return(
        <Formik
        initialValues={{
          name: "",
          id: "",
          birth: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          province: "",
          district: "",
          wards: "",
          numberHome: "",
          phone: "",
          email: "",
          aroundArea: "",
          statusHealths: [],
          contactPersons: [],
        }}
       validationSchema={yup.object({
        name:yup.string().required("Yêu cầu nhập :"),
        id:yup.string().required("yêu cầu nhập :"),
        gender:yup.mixed().oneOf(["","female","male"],"Vui lòng chọn giới tính").nullable(),
        nationality:yup.string().required("Yêu cầu nhập :"),
        province:yup.string().required("Yêu cầu nhập"),
        district:yup.string().required("Yêu cầu nhập"),
        wards:yup.string().required("Yêu cầu nhập"),
        numberHome:yup.string().required("Yêu cầu nhập"),
        phone:yup.string().required("Yêu cầu nhập"),
        email:yup.string().email("Bạn nhập sai cú pháp :"),
       })}
       onSubmit={(values)=>{
        alert("Thành công")
       }}
       >
        <Form>
            <h1>Tờ khai báo y tế</h1>
            <div>
            <label htmlFor="name">Họ tên</label><br />
            <Field id="name" name="name" type="text"/>
            <ErrorMessage name="name" component="div"/>
            </div>
            <div>
            <label htmlFor="id">ID</label><br />
            <Field id="id" name="id" type="text"/>
            <ErrorMessage name="id" component="div"/>
            </div>
            <div>
            <label htmlFor="birth">birth</label><br />
            <Field  id="birth" name="birth" type="text"/>
            <ErrorMessage name="birth" component="div"/>
            </div>
            <div>
                {Set_List.map((gender)=>(
                    <label key={gender.value}>{gender.label}
                    <Field type="radio" name="gender" value={gender.value} />
                    </label>
                ))}
              {/* <label>
                <Field type="radio" name="gender" value={"Name"} />
                Nam
              </label>
              <label>
                <Field type="radio" name="gender" value={"Nữ"} />
                Nữ
              </label>
              <label>
                <Field type="radio" name="gender" value={''} />
                Không chọn
              </label> */}
            </div>
            <div>
            <label htmlFor="nationality">nationality</label><br />
            <Field id="nationality" name="nationality" type="text"/>
            <ErrorMessage name="nationality" component="div"/>
            </div>
            <div>
            <label htmlFor="company">company</label><br />
            <Field id="company" name="company" type="text"/>
            <ErrorMessage name="company" component="div"/>
            </div>
            <div>
            <label htmlFor="department">department</label><br />
            <Field id="department" name="department" type="text"/>
            <ErrorMessage name="department" component="div"/>
            </div>
            <div>
            <label htmlFor="province">province</label><br />
            <Field id="province" name="province" type="text"/>
            <ErrorMessage name="province" component="div"/>
            </div>
            <div>
            <label htmlFor="district">district</label><br />
            <Field id="district" name="district" type="text"/>
            <ErrorMessage name="district" component="div"/>
            </div>
            <div>
            <label htmlFor="wards">wards</label><br />
            <Field id="wards" name="wards" type="text"/>
            <ErrorMessage name="wards" component="div"/>
            </div>
            <div>
            <label htmlFor="numberHome">numberHome</label><br />
            <Field id="numberHome" name="numberHome" type="text"/>
            <ErrorMessage name="numberHome" component="div"/>
            </div>
            <div>
            <label htmlFor="phone">phone</label><br />
            <Field id="phone" name="phone" type="text"/>
            <ErrorMessage name="phone" component="div"/>
            </div>
            <div>
            <label htmlFor="email">email</label><br />
            <Field id="email" name="email" type="text"/>
            <ErrorMessage name="email" component="div"/>
            </div>
            <div>
            <label htmlFor="aroundArea">aroundArea</label><br />
            <Field id="aroundArea" name="aroundArea" type="text"/>
            </div>
            <div>
                <label>Trong vòng 14 ngày qua</label><br />
                {statusHealths.map((status)=>(
                    <label key={status}>
                        <Field type="checkbox" name="statusHealths" value={status}/>
                        {status}
                    </label> 
                ))}
            <br />
            </div> 
          <div>
                <label>Trong vòng 14 ngày qua biểu hiện</label><br />
                {contactPersons.map((contact)=>(
                    <label key={contact}>
                        <Field type="checkbox" name="contactPersons" value={contact}/>
                        {contact}
                    </label>
                ))}
            </div>
            <button type="submit">Create</button>
        </Form>
       </Formik>
    )
}
export default FormHealth;