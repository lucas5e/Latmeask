import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'


export function Room() {
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>codigo</div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Nome sala</h1>
                    <span>10 perguntas</span>
                </div>
                <form >
                    <textarea
                        placeholder="O que você quer perguntar?"
                    />

                    <div className="form-footer">
                        <span>Para enviar sua pergunta, <button>faça seu login</button></span>
                        <Button>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}