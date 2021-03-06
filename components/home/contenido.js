import React from "react";

var Contenido = props => {
	return(
		<div>
			<div id="contenido2">
				<div>
					<div className={props.clase1}></div>
					<div className={props.clase2}></div>
					<div className={props.clase3}></div>
				</div>
			</div>
			<style jsx>{`
				#contenido2{
				    padding: 20px 5%;
				    width: 100%;
				    height: 700px;
				    background: -moz-linear-gradient(left top,#006978, #b4ffff) ,
				                -webkit-linear-gradient(left bottom,#006978, #b4ffff);
				}
				#contenido2 div{
				    padding-top:5px; 
				    width: 90%;
				    height: 610px;
				    background: red
				}
				#contenido2 div div{
				    position: relative;
				    width: 90%;
				    height: 180px;
				    margin: 10px 5%;
				    background: white
				
				}
				.hidden-left {
				  opacity: 0;
				  left: -75%;
				}
				.hidden-right{
				    opacity: 0;
				    right: -75%;
				}
				.show-left {
				   position: absolute;
				   left: 0;
				   -webkit-animation: fade-left 2s forwards ease;
				   animation: fade-left 2s forwards ease;
				}
				.show-right{
				    position: absolute;
				   right: 0;
				   -webkit-animation: fade-right 2s forwards ease;
				   animation: fade-right 2s forwards ease;
				
				}
				@keyframes fade-right {
				    from{
				        right: -75%;
				        opacity: 0;
				    }to{
				        right: 0;
				        opacity: 1;
				    }
				}
				@keyframes fade-left {
				    from{
				        left: -75%;
				        opacity: 0;
				    }to{
				        left: 0;
				        opacity: 1;
				    }
				}
			`}</style>
		</div>
	);
}
export default Contenido;