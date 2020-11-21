import app from "./https"

export function se(phone,password){
    return app({
        url:"/login/cellphone?phone="+phone+"&password="+password,
        method:"get"
    })
}

export function bannerData(){
    return app({
        url:"/banner?type=2",
        method:"get"
    })
}