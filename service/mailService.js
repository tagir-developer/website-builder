const nodemailer = require('nodemailer')

const styles = {
	main: `
	style="
		background: #e7f0f8; 
		padding: 40px;
		font-family: sans-serif; 
		color: #22304a;
		"
		`,
	a: `
	style="
		display: block;
		width: 300px;
		height: 40px;
		background: #232443;
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
		text-decoration: none;
		font-size: 16px;
		color: white;
		margin-top: 40px;
		"
	`
}

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})
	}

	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Активация аккаунта на ' + process.env.API_URL,
			text: '',
			html: 
			`
			<div ${styles.main}>
				<h1>Для активации аккаунта перейдите по ссылке</h1>
				<a ${styles.a} href="${link}">${link}</a>
			</div>
			`
		}, (error) => {
			console.log(error.message)
		})
	}

	async sendResetPasswordMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Восстановление пароля на ' + process.env.API_URL,
			text: '',
			html: 
			`
			<div ${styles.main}>
				<h1>От вас поступила заявка на восстановление пароля.</h1>
				<p>Если вы не запрашивали восстановление пароля, проигнорируйте это письмо. Если запрос делали вы, то для сброса пароля перейдите по ссылке</p>
				<a ${styles.a} href="${link}">Восстановить доступ</a>
			</div>
			`
		}, (error) => {
			console.log(error.message)
		})
	}

}

module.exports = new MailService()