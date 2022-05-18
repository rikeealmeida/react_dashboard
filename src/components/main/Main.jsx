import hello from '../../assets/hello.svg';
import chart from '../charts/chart.jsx';
import main from '../../components/main/Main.css';
import React from 'react';


const Main = () => {
    return (
        <main >
            <div>
                <div className="Main__container">
                    <div className="main__title">
                        <img src={hello} alt="hello" />
                        <div className="main_greeting">
                            <h1>Olá Henrique</h1>
                            <p>Bem vindo ao seu painel</p>
                        </div>
                    </div>
                    <div className="main__cards">

                    <div className="card">
                            <i className="fa fa-user-alt fa-2x text-lightblue"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Total de matrículas</p>
                                <span className="font-bold text-title">568</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-user-check fa-2x text-green"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Matrículas ativas</p>
                                <span className="font-bold text-title">980</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-user-clock fa-2x text-red"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Matrículas inadimplentes</p>
                                <span className="font-bold text-title">40</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-money fa-2x text-green"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Pagamentos do mês</p>
                                <span className="font-bold text-title">R$2.870</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-users fa-2x text-lightblue"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Total de turmas</p>
                                <span className="font-bold text-title">568</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-users fa-2x text-lightblue"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Total de matrículas</p>
                                <span className="font-bold text-title">568</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-users fa-2x text-lightblue"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Total de matrículas</p>
                                <span className="font-bold text-title">568</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-users fa-2x text-lightblue"></i>
                            <div className="cards_inner">
                                <p className="text-primary-p">Total de matrículas</p>
                                <span className="font-bold text-title">568</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Relatório diário</h1>
                                <p>Parauapebas, Pará, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Relatório mensal</h1>
                                <p>Parauapebas, Pará, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Despesas administrativas</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className="card4">
                                <h1>Despesas fixas</h1>
                                <p>R$180,00</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;