import React, {useState} from "react";
import cls from '../wallet/Wallet.module.scss'
import {Link} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

export const Wallet = () => {
	const walletsData = [
		{
			id: uuidv4(),
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Osaka_Metro_Nanko_Port_Town_line_symbol.svg/2048px-Osaka_Metro_Nanko_Port_Town_line_symbol.svg.png',
			title: 'Payeer',
			percent: 'Коммисия 6%',
			walletNum: 'Не указан!',
			min: '1 ₽',
			max: '15000 ₽',
			activeWallet: true,
		},
		{
			id: uuidv4(),
			logo: 'https://avatanplus.com/files/resources/original/5759b69c2046c155367151e4.png',
			title: 'В разработке!',
			percent: 'Коммисия 0%',
			walletNum: 'Не указан!',
			min: '0 ₽',
			max: '0 ₽',
			activeWallet: false,
		},
		{
			id: uuidv4(),
			logo: 'https://avatanplus.com/files/resources/original/5759b69c2046c155367151e4.png',
			title: 'В разработке!',
			percent: 'Коммисия 0%',
			walletNum: 'Не указан!',
			min: '0 ₽',
			max: '0 ₽',
			activeWallet: false,
		},
		{
			id: uuidv4(),
			logo: 'https://avatanplus.com/files/resources/original/5759b69c2046c155367151e4.png',
			title: 'В разработке!',
			percent: 'Коммисия 0%',
			walletNum: 'Не указан!',
			min: '0 ₽',
			max: '0 ₽',
			activeWallet: false,
		},
	]
	const [wallets, setWallets] = useState(walletsData)

	// const handleChangeConnected = (id) => {
	// 	setWallets(wallets.map(item => item.id === id ? {...item, connected: !item.connected} : item))
	// }

	return (
		<div className={cls.wallet}>
			<h1 className={cls.wallet_headtitle}>Доступные кошельки для вводов и выводов, чтобы начать зарабатывать установите один из удобных вариантов!</h1>
			<section className={cls.wallet_cards}>
				{
					wallets.map(item => (
						<div key={item.id} className={cls.cards_card}>
							<section className={cls.card_section}>
								<img className={cls.card_logo} src={item.logo} alt="logo"/>
								<h1 className={cls.card_title}>
									{item.title} <br/>
									<span className={cls.card_titleinner}> {item.precent} </span>
								</h1>
							</section>

							<section className={cls.card_walletNum}> {item.walletNum} </section>

							<section className={cls.card_minmaxBox}>
								<p className={cls.card_title}>
									Мин сумма <br/>
									<span className={cls.card_num}> {item.min} </span>
								</p>
								<p className={cls.card_title}>
									Макс сумма <br/>
									<span className={cls.card_num}> {item.max} </span>
								</p>
							</section>

							{
								item.activeWallet === true ?
								<Link to={'/profile/settings'} onClick={() => {}} className={cls.card_button1}>Настроить</Link>
								:
								<button onClick={() => {}} className={`${cls.card_button1} ${cls.button_false}`}>Недоступно</button>
							}

						</div>
					))
				}
			</section>
		</div>
	)
}
