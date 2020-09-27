import { Instruccion } from "../Instruccion"
import { AST } from "../AST"
import { TablaSimbolos } from "../TablaSimbolos";
import { ValorGrafo } from "../grafo/ValorGrafo";

export class Primitivo extends Instruccion {
    valor:any;
    /**
     * @class La clase Primitivo almacena el valor real (numero|cadena|booleano)
     * @param line linea del primitivo
     * @param column columna del primitivo
     * @param valor valor real
     */
    constructor(valor:any, line:Number, column:Number){
        super(line,column)
        this.valor = valor;
    }

    execute(ts: TablaSimbolos, arbol: AST) {
        return null;
    }
    translate() {
        return null;
    }
    generarGrafo(g: ValorGrafo, padre: String) {
        let nombreHijo = "nodo"+g.contador;
        g.grafo += "  "+nombreHijo +"[label=\""+ this.valor.toString() +"\"];\n";
        g.grafo += "  "+padre +" -> "+ nombreHijo+";\n";
        g.contador++;
        return null;
    }
    getNombreHijo(): String {
        return "PRIMITIVO";
    }
}