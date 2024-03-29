const { default: axios } = require('axios')
const nodemailer = require('nodemailer')
const ApiError = require('../exeptions/apiError')

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
	`,
	bold: `
	style="
		font-weight: bold;
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
			},
			tls: { rejectUnauthorized: false }
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

	async sendFooterQuestionMail(email, message, files) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: 'orlov.marsel@yandex.ru',
			subject: 'Вопрос от пользователя с сайта ' + process.env.CLIENT_URL,
			text: '',
			html:
				`
			<div ${styles.main}>
				<h1>Пользователь сервиса задал вопрос</h1>
				<span ${styles.bold}>Email пользователя: </span><p style="color: #22304a">${email}</p>
				<span ${styles.bold}>Вопрос пользователя: </span><p>${message}</p>
			</div>
			`,
			attachments: files
		}, (error) => {
			console.log('Ошибка при отправки письма', error)
		})
	}

	async sendFooterComplaintMail(email, message) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: 'orlov.marsel@yandex.ru',
			subject: 'Жалоба от пользователя с сайта ' + process.env.CLIENT_URL,
			text: '',
			html:
				`
			<div ${styles.main}>
				<h1>Пользователь сервиса подал жалобу</h1>
				<span ${styles.bold}>Email пользователя: </span><p style="color: #22304a">${email}</p>
				<span ${styles.bold}>Сообщение: </span><p>${message}</p>
			</div>
			`
		}, (error) => {
			console.log('Ошибка при отправки письма', error)
		})
	}


	async sendNamePhoneForm(formProcessing, formName, name, phone) {

		let mailList = [
			formProcessing.email
		]

		if (formProcessing.secondaryEmail) {
			let additionalEmails = formProcessing.secondaryEmail.split(',')
			additionalEmails = additionalEmails.map(i => i.trim());
			mailList = [...mailList, ...additionalEmails]
		}

		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: mailList,
			subject: formProcessing.letterSubject,
			text: '',
			html:
				`
			<div ${styles.main}>
				<h1>Кто-то оставил заявку в форме "${formName}"</h1>
				<span ${styles.bold}>Имя пользователя: </span><p style="color: #22304a">${name}</p>
				<span ${styles.bold}>Телефон: </span><p>${phone}</p>
			</div>
			`
		}, (error) => {
			console.log('Ошибка при отправки письма', error)
			throw ApiError.BadRequest('Произошла ошибка при отправке письма', 'danger')
		})

		if (formProcessing.phoneNumber) {
			const textMessage = `Новая заявка. Форма: ${formName}. Имя: ${name}. Телефон: ${phone}`
			const url = `${process.env.SMS_SERVER_URL}/sms/send?number=${formProcessing.phoneNumber}&text=${textMessage}&sign=SMS Aero`
			const encodedUrl = encodeURI(url)

			const messageData = await axios.get(encodedUrl)
			if (!messageData.data.success) throw ApiError.BadRequest('Произошла ошибка при отправке СМС сообщения', 'danger')
		}


	}

}

module.exports = new MailService()