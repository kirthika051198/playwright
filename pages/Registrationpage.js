import credentials from "../credential.json"
class Registrationpage {

  constructor(page) {
    this.page = page;
   // this.newregistration = page.locator('//a[@href="Register.php"]').click();   
   this.username1 = page.locator('//input[@name="username"]');
   this.password1 = page.locator('//input[@name="password"]');
   this.confirmpassword1 = page.locator('//input[@name="re_password"]');
   this.fullname1 = page.locator('//input[@name="full_name"]');
    this.email1 = page.locator('//input[@name="email_add"]');
  //  this.captcha1 = page.locator('//input[@name="captcha"]');
    this.checkbox1 = page.locator('//input[@name="tnc_box"]');
    this.registerbutton1 = page.locator('//input[@name="Submit"]');
  }

  async  goto(url) {
    await this.page.goto(url);
  }
  async register({
      username,
      password,
      confirmPassword,
      fullName,
      email
    }){

  //async register({ username, password, confirmPassword, fullName, email }) {
    await this.username1.fill(username);
    await this.password1.fill(password);
    await this.confirmpassword1.fill(confirmPassword);
    await this.fullname1.fill(fullName);
    await this.email1.fill(email);
   // await this.captcha1.fill(captcha);
    await this.checkbox1.check();
    await this.registerbutton1.click();
  }
}


export default Registrationpage;

