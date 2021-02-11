import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Dan" time="Today at 12:36AM" content="I. WANT. THAT. TOY!" avatar={Faker.image.image()} />
            <CommentDetail author="Luke" time="Today at 1:24PM" content="That must be fun!" avatar={Faker.image.image()} />
            <CommentDetail author="Mom" time="Today at 2:53PM" content="Wow, I wonder how hard that was to make..." avatar={Faker.image.image()} />
            <CommentDetail author="Dad" time="Today at 2:57PM" content="We should try this ourselves." avatar={Faker.image.image()} />
            <CommentDetail author="Tiô" time="Today at 3:04PM" content="jh  feq" avatar={Faker.image.image()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));