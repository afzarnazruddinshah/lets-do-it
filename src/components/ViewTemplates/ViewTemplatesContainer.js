import React from 'react';
import { connect } from 'react-redux';
import ViewTemplates from './ViewTemplates';

const ViewTemplatesContainer = (props) => {
    return ( 
        <ViewTemplates {...props} />
     );
}

const mapStateToProps = (state) => ({
    date: new Date().toDateString(),
    templates: state.templates
})

const mapDispatchToProps = (dispatch) => ({

})
 
export default connect(mapStateToProps, mapDispatchToProps)(ViewTemplatesContainer);