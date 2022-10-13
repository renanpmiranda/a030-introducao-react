import './App.css';
import { CardVideo } from './componentes/CardVideo';

function App() {
    return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr>
                    </hr>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideo titulo={"Título do vídeo 1"} imagem={"https://picsum.photos/400/400?a=1"}/> 
                <CardVideo titulo={"Título do vídeo 2"} imagem={"https://picsum.photos/400/400?a=2"}/> 
                <CardVideo titulo={"Título do vídeo 3"} imagem={"https://picsum.photos/400/400?a=3"}/> 
                <CardVideo titulo={"Título do vídeo 4"} imagem={"https://picsum.photos/400/400?a=4"}/> 
                <CardVideo titulo={"Título do vídeo 5"} imagem={"https://picsum.photos/400/400?a=5"}/> 
                <CardVideo titulo={"Título do vídeo 6"} imagem={"https://picsum.photos/400/400?a=6"}/> 
                <CardVideo titulo={"Título do vídeo 7"} imagem={"https://picsum.photos/400/400?a=7"}/> 
                <CardVideo titulo={"Título do vídeo 8"} imagem={"https://picsum.photos/400/400?a=8"}/>                                              
            </section>
        </main>
        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
