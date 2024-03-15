function MenuItem({image,name,content,price}) {
  return (
<div className="menuItem">
    <div style={{backgroundImage:`url(${image})`}}>
    <h1 style={{paddingTop:'200px',color:'brown'}}>{name}</h1>
    <h5 style={{marginTop:'20px',fontSize:'18px'}}>{content}</h5>
    <p style={{marginTop:'20px',color:'green',fontSize:'20px'}}>{price} TL</p>
    </div>
</div>
  )
}

export default MenuItem