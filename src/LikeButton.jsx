import { useState } from "react";

function LikeButton(){
  const[likes,setLikes] = useState(0);

  return(
    <div style = {styles.main}>
      <div style = {styles.ribbon}>🎀</div>
    <div style={styles.container}>
      <h1 style={styles.title}>💖 Like Counter</h1>
      <p style={styles.count}>{likes}</p>
      <p style= {{...styles.label, opacity: likes === 0 ? 0.4 : 1,}}>likes</p>
      <button style={styles.likeBtn}
        onClick={() => setLikes(likes + 1)}>❤️ Like</button>
      <button  style={{
          ...styles.resetBtn,
          opacity: likes === 0 ? 0.4 : 1,
          cursor: likes === 0 ? "not-allowed" : "pointer"
        }}
         onClick={() => setLikes(0)}
        disabled={likes === 0}> 🔄 Reset</button>
    </div>
    </div>
  );
}

const styles = {
  main:{
    position:"relative",

  },
  container:{ 
    backgroundColor:"#643c61",
     textAlign: "center",
    fontFamily: "Arial",
    borderRadius:"69px",
    width:"69rem",
    margin:"0",
    padding:"60px",
  },
  title:{
    fontSize: "78px",
    marginBottom: "5px",
    color:"#dcbfdf",
    marginTop:"0"

  },
  count:{
     fontSize: "80px",
    fontWeight: "bold",
    color: "#eabbcb",
    margin:"0px",
    padding:"0"
  },
  label:{
    fontSize: "16px",
    color: "gray",
    marginBottom: "30px",
    marginTop:"0px"

  },
  likeBtn:{
    backgroundColor: "#9d3457",
    color: "white",
    border: "none",
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    marginRight: "12px",
    marginBottom:"2px",
     width: "auto"
  },
  resetBtn:{
    backgroundColor: "#385360",
    color: "white",
    border: "none",
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    width: "auto"
  },

  ribbon:{
    fontSize:"90px",
    display:"inline",
    position:"absolute",
    top:"-67px",
    left:"1px"

  }
};

export default LikeButton
