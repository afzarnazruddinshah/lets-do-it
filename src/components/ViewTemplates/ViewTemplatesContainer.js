import React from "react";
import { connect } from "react-redux";
import ViewTemplates from "./ViewTemplates";
import { deleteTemplate } from "./../../redux/actions/Template/TemplateActions";
import { openSnackbar } from "../../redux/actions/UI/UIActions";

const ViewTemplatesContainer = (props) => {
  return <div>{<ViewTemplates {...props} />}</div>;
};

const mapStateToProps = (state) => ({
  date: new Date().toDateString(),
  templates: state.templates,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTemplate: (id) => dispatch(deleteTemplate(id)),
  openSnackBar: (message) => dispatch(openSnackbar(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTemplatesContainer);
