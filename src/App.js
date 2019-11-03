import React,{Component} from 'react';
import LaLigaProvider from './componentes/LaLiga';
import Equipos from './componentes/Equipos';

export default class App extends Component {

    render() {
        return (
            <div className="class-name">
            <LaLigaProvider>
              <Equipos />
            </LaLigaProvider>
            </div>
        );
    }
}