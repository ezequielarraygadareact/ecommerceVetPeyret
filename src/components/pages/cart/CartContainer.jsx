//Recursos
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import { Box, CardMedia } from "@mui/material";
//Logica
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Esta seguro que quiere vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      // Si es Si o SI es No en el boton
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div className="contenedorCarrito">
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="contenedorCarrito">
            <Card sx={{ display: "flex", with: "auto" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {elemento.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cantidad: {elemento.quantity}
                  </Typography>
                  <Typography variant="body1">$ {elemento.price}</Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={elemento.img}
              />
              <CardActions>
                <Button size="small" onClick={() => deleteById(elemento.id)}>
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}

      {cart.length > 0 && (
        <Button size="small" onClick={limpiar}>
          Vaciar carrito de compras
        </Button>
      )}

      <h2>El total es: $ {total}</h2>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button size="small" onClick="">
            Finalizar compra
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CartContainer;
