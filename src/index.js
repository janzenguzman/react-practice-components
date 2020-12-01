import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Sample One"
          timeAgo="Today at 4:45PM"
          commentBody="Nice blog post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Alex June"
          timeAgo="Today at 2:00AM"
          commentBody="Awesome!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Arthur Rake"
          timeAgo="Yesterday at 5:00PM"
          commentBody="Very informative."
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
