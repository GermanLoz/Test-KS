function validateForm(emailData, passwordData){

    const email = "sistemas@keepsmiling.com.ar"
    const password = "keepsmiling"
    if(emailData === email && passwordData === password  ){
        return {status:true, id:emailData}
    } else {
        return false
    }
}
export default validateForm