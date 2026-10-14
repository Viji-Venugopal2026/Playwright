export class KPlogin{

constructor(page){
    this.userFld=page.locator('#ulogin')
    this.psswrdFld=page.locator('#upass')
    this.loginBtn=page.locator('#sub_logbtn')
}

async setValues(userName,passWrd)
{
    await this.userFld.fill(userName)
    await this.psswrdFld.fill(passWrd)
}

async loginClick(){
    await this.loginBtn.click()
}
}