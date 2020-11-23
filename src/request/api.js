import app from "./https"

export function search(){
    return app({
     url:"/search?keywords=海阔天空"
    })
}
