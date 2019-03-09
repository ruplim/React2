import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderComments({comments}) {
    
    let commentList = comments.map(comment => {
        return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentList}
            </ul>
        </div>
);
}

function RenderDish({dish}) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}
    
const DishDetail = (props) => {
    return(
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                     <RenderDish dish={props.dish} />
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                      { props.dish && <RenderComments comments={props.dish.comments} /> }
                    </div>
                </div>
            </div>
        );
}
    


export default DishDetail;