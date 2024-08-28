const reqCategorias = fetch(`http://localhost:8087/categorias`).then((resp)=> {
    resp.json().then((data)=>{
      console.log(data)
              const categoriasLista = document.getElementById('categoriasLista');
        
              categoriasLista.innerHTML = '';
      
              const items = data.map(({ id, nombreCategoria }) => {
                  const li = document.createElement('li');
                  li.innerHTML = `ID: ${id} - Nombre: ${nombreCategoria}`;
                  return li;
              });
      
       
              items.forEach(item => categoriasLista.appendChild(item));
    })
  }).catch(console.warn)
   