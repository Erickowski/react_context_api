import React,{Component} from 'react';

//creando el context
const LaLigaContext = React.createContext();
export {LaLigaContext};

export default class LaLigaProvider extends Component {

    state = {
        equipos : [
          {
            nombre: 'Real Madrid',
            titulos: 33
          },
          {
            nombre: 'FC Barcelona',
            titulos: 26
          },
          {
            nombre: 'Atletico de Madrid',
            titulos: 10
          }
        ]
      }

    render() {
        return (
            <LaLigaContext.Provider value={{
                state: this.state.equipos,
                esCampeon: (id) => {
                    const equipos = [...this.state.equipos];
                    equipos[id].titulos = equipos[id].titulos + 1;
                    this.setState({
                        state: equipos
                    })
                }
            }}>
                {this.props.children}
            </LaLigaContext.Provider>
        );
    }
}