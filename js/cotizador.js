var boton = document.getElementById('calcular');
boton.addEventListener('click', calculaCompra);

function calculaCompra() {
    document.getElementById('mainCSS').href = "css/main2.css";
    var cantidadPase1 = document.getElementById('pase_dia').value;
    var cantidadPase2 = document.getElementById('pase_completo').value;
    var cantidadPase3 = document.getElementById('pase_dosdias').value;
    var cantidadCamisa = document.getElementById('camisa_evento').value;
    var cantidadEtiqueta = document.getElementById('etiquetas').value;
    var precio1 = 30;
    var precio2 = 50;
    var precio3 = 45;
    var precio4 = 10;
    var precio5 = 2;
    var total = cantidadPase1 * precio1 + cantidadPase2 * precio2 + cantidadPase3 * precio3 + cantidadCamisa * precio4 + cantidadEtiqueta * precio5;

    var elementos = [cantidadPase1, cantidadPase2, cantidadPase3, cantidadCamisa, cantidadEtiqueta];
    var hayDesc = false;
    var descuento;
    var porcDesc = 0.07;

    elementos.forEach((valor, index) => {
        if (valor) {
            document.getElementById("tr0").style = "";


            switch (index) {
                case 0:
                    document.getElementById("tr1").style = "";
                    document.getElementById("li1" + (index + 1)).textContent = valor;
                    document.getElementById("li1" + (index + 2)).textContent = "Pase por día";
                    document.getElementById("li1" + (index + 3)).textContent = "$ " + precio1;
                    document.getElementById("li1" + (index + 4)).textContent = "$ " + valor * precio1;
                    break;
                case 1:
                    document.getElementById("tr2").style = "";
                    document.getElementById("li2" + index).textContent = valor;
                    document.getElementById("li2" + (index + 1)).textContent = "Pase Todos los días";
                    document.getElementById("li2" + (index + 2)).textContent = "$ " + precio2;
                    document.getElementById("li2" + (index + 3)).textContent = "$ " + valor * precio2;
                    break;
                case 2:
                    document.getElementById("tr3").style = "";
                    document.getElementById("li3" + (index - 1)).textContent = valor;
                    document.getElementById("li3" + index).textContent = "Pase por  dos días";
                    document.getElementById("li3" + (index + 1)).textContent = "$ " + precio3;
                    document.getElementById("li3" + (index + 2)).textContent = "$ " + valor * precio3;
                    break;
                case 3:
                    document.getElementById("tr4").style = "";
                    document.getElementById("li4" + (index - 2)).textContent = valor;
                    document.getElementById("li4" + (index - 1)).textContent = "Camisas";
                    document.getElementById("li4" + index).textContent = "$ " + precio4;
                    document.getElementById("li4" + (index + 1)).textContent = "$ " + valor * precio4;
                    hayDesc = true;
                    descuento = valor * (precio4 * porcDesc)
                    break;
                case 4:
                    document.getElementById("tr5").style = "";
                    document.getElementById("li5" + (index - 3)).textContent = valor;
                    document.getElementById("li5" + (index - 2)).textContent = "Etiquetas";
                    document.getElementById("li5" + (index - 1)).textContent = "$ " + precio5;
                    document.getElementById("li5" + index).textContent = "$ " + valor * precio5;
                    break;

                default:
                    break;
            }
        }
        if (total) {
            document.getElementById("total_pedido").type = "text";
            document.getElementById("total_pedido").value = "$ " + total;
            document.getElementById("p_resumen").textContent = "Resumen:";
            document.getElementById("p_total").textContent = "Total:";
        }

        if (hayDesc) {
            document.getElementById("total_descuento").type = "text";
            document.getElementById("total_descuento").value = "$ " + Number.parseFloat(descuento).toFixed(2);
            document.getElementById("total_con_descuento").type = "text";
            document.getElementById("total_con_descuento").value = "$ " + (total - Number.parseFloat(descuento).toFixed(2));
            document.getElementById("p_descuento").textContent = "Descuento:";
            document.getElementById("p_totalDesc").textContent = "Total con Descuento:";
        }

    });
}
