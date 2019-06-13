import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { MIN_INPUT_NUMBER } from '../../utils/constants/formsUtils';
import Button from '../Button/Button';

const Input = styled.input`
  width: 40px;
  margin: 0 4px;
  text-align: right;
`;

const EditModeForm = ({ game, handleSubmit }) => (
  <div>
    <Formik
      initialValues={{
        scoreHome: game._scoreHome,
        scoreAway: game._scoreAway
      }}
      onSubmit={async values => {
        await axios.put(
          `http://localhost:4000/api/matches/${game._id}`,
          values
        );
        handleSubmit();
      }}
      validationSchema={Yup.object().shape({
        scoreHome: Yup.number()
          .moreThan(MIN_INPUT_NUMBER)
          .integer()
          .required(),
        scoreAway: Yup.number()
          .moreThan(MIN_INPUT_NUMBER)
          .integer()
          .required()
      })}
    >
      {props => {
        const { values, handleChange, handleSubmit, isValid } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Input
              id="scoreHome"
              type="number"
              value={values.scoreHome}
              onChange={handleChange}
            />
            :
            <Input
              id="scoreAway"
              type="number"
              value={values.scoreAway}
              onChange={handleChange}
            />
            <Button width="auto" disabled={!isValid}>
              Update score
            </Button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default EditModeForm;
