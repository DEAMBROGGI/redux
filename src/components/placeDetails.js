import { useEffect, useState } from 'react';
import './styles/placeDetails.css'
import { connect } from 'react-redux';
import placesActions from '../redux/actions/placesActions'
import commentsActions from '../redux/actions/commentsActions';
import { useParams } from 'react-router-dom';

const PlaceDetails = (props) => {
  const { id } = useParams()
  const [place, setPlace] = useState()
  const [inputText, setInputText] = useState()
  const [modifi, setModifi] = useState()
  const [reload, setReload] = useState(false)

  useEffect(() => {
    props.getOnePlace(id)
      .then(response => setPlace(response.data.response.place))
  }, [reload])

  async function cargarComentario(event) {

    const commentData = {
      place: place._id,
      comment: inputText,
    }
    await props.addComment(commentData)
      .then(response => setPlace(response.data.response.nuevoComment), setInputText(""))

  }

  async function modificarComentario(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modifi,
    }
    await props.modifiComment(commentData)
    setReload(!reload)

  }
  async function eliminarComentario(event) {
    await props.deleteComment(event.target.id)
    setReload(!reload)
  }

  async function likesOrDislikes() {
    await props.likeDislike(place._id)
    
    setReload(!reload)
  }
  console.log(place)



  return (
    <>

      <div class="card mb-3 cardDetail"  >
        <div className='detailImg' style={{ backgroundImage: "url(" + place?.image + ")" }}></div>
        <div class="card-body">
          <h5 class="card-title">{place?.name} - {place?.country}</h5>
          <p class="card-text">{place?.description}</p>
          <p class="card-text">{place?.autor.fullName}</p>


          <div className="likeDislike">

            {props.user ?
              (<button onClick={likesOrDislikes}>{place?.likes.includes(props.user.id) ?
                <span style={{ color: "red", fontSize:30 }} class="material-icons">favorite</span> :
                <span style={{  fontSize:30 }}class="material-icons">favorite_border</span>}</button>)

              : (<span style={{  fontSize:30 }} class="material-icons">favorite_border</span>)}

          <h3 style={{  color:"black ",fontSize:30 }}>{place?.likes.length}</h3>
          </div>
        </div>




        <div class="accordion" id={place?.name}>
          <div class="accordion-item">
            <h2 class="accordion-header " id={"heading" + place?.name}>
              <button class="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + place?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={place?.name.replace(/ /g, "").slice(0, 5)}>
                Comentarios
                <span class="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={place?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + place?.name.replace(/ /g, "").slice(0, 5)}>
                  keyboard_arrow_down
                </span>
              </button>
            </h2>
            <div id={place?.name.replace(/ /g, "").slice(0, 5)} class="accordion-collapse collapse " aria-labelledby={"heading" + place?.name} data-bs-parent={"#" + place?.name}>
              <div class="accordion-body  ">

              
                {place?.comments.map(comment =>
                  <>
                    {comment.userID?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userID?.fullName}
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userID.fullName}
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} class="btn btn-primary">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} class="btn btn-primary">Eliminar</button>
                        </div>
                      </div>

                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={cargarComentario} class="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                }
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
const mapDispatchToProps = {
  getOnePlace: placesActions.getOnePlace,
  addComment: commentsActions.addComment,
  modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
  likeDislike: placesActions.likeDislike

}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
