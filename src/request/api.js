import app from "./https"

export function se(phone,password){
    return app({
        url:"/login/cellphone?phone="+phone+"&password="+password,
        method:"get"
    })
}