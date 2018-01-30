import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers: [ProductoService]
})
export class ProductosListComponent implements OnInit {

  public titulo: string;
  public productos: Producto[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _routes: Router,
    private _productoService: ProductoService
  ) { 
    this.titulo = 'Listado de productos'
  }

  
	ngOnInit(){
		console.log('productos-list.component.ts cargado');
		this.getProductos();
	}

	getProductos(){
		this._productoService.getProductos().subscribe(
			result => {
				
				if(result.code != 200){
					console.log(result);
				}else{
					this.productos = result.data;
				}

			},
			error => {
				console.log(<any>error);
			}
		);
	}

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteProducto(id){
		this._productoService.deleteProducto(id).subscribe(
			response => {
				if(response.code == 200){
					this.getProductos();
				}else{
					alert('Error al borrar producto');
				}
			},	
			error => {
				console.log(<any>error);
			}
		);
	}

}
