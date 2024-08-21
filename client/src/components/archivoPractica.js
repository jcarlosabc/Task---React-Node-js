// import './App.css';
// import { Input, Label, Button } from './components/ui/indexForm';
// import { useState } from "react";


// function App() {
  
//   const [nombre_apellido, setNombreApellido] = useState("");
//   const [email, setEmail] = useState("");
//   const [telefono, setTelefono] = useState(0);

//   const mostrarDatos = ()=>{
//     alert(nombre_apellido);
//     alert(email);
//     alert(telefono);
//   }

//   return (
//     <div className="App">
//        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img alt="Your Company" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="mx-auto h-10 w-auto"/>
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Formulario </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
//           <form action="#" method="POST" className="space-y-6">
            
//               <Label htmlFor="idNombreApellido">Nombre y Apellidos</Label>
//               <div className="mt-2">
//                 <Input
//                   onChange={(event)=>{
//                     setNombreApellido(event.target.value);
//                   }}
//                   id="idNombreApellido" 
//                   name="nombre_apellido" 
//                   type="text" required/>
//               </div>

//               <Label htmlFor="idEmail">Email</Label>
//               <div className="mt-2">
//                 <Input
//                   onChange={(event)=>{
//                     setEmail(event.target.value);
//                   }} 
//                   id="idCorreo" 
//                   name="correo"
//                   type="email" required placeholder="Correo" />
//               </div>

//               <Label htmlFor="idTelefono">Télefono</Label>
//               <div className="mt-2">
//                 <Input
//                   onChange={(event)=>{
//                     setTelefono(event.target.value);
//                   }} 
//                   id="idTelefono" 
//                   name="telefono"
//                   type="number"/>
//               </div>

//             <div>
//               <Button 
//                 onClick={mostrarDatos}
//                 // type="submit"
//               >Entrar
//               </Button>
//             </div>
//           </form>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
