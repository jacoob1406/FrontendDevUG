import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { MIN_INPUT_NUMBER } from '../../utils/constants/formsUtils';
import Button from '../Button/Button';
import Form from './styled/Form';
import FormItem from './styled/FormItem';
import CheckboxContainer from './styled/CheckboxContainer';
import SuccessContainer from './styled/SuccessContainer';

const AddGame = ({ history }) => {
  const [successMessage, setSuccessMessage] = useState(false);

  const addedSuccessToggle = () => {
    if (successMessage) {
      setSuccessMessage(false);
    } else {
      setSuccessMessage(true);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          homeTeam: '',
          awayTeam: '',
          scoreHome: '',
          scoreAway: '',
          isFriendly: false
        }}
        onSubmit={async(values, { resetForm }) => {
          await axios
            .post('http://localhost:4000/api/matches/new/', values)
            .then(() => {
              addedSuccessToggle();
              resetForm();
            })
            .catch(error => {
              console.log(error.response);
            });
        }}
        validationSchema={Yup.object().shape({
          homeTeam: Yup.string().required('Required'),
          awayTeam: Yup.string().required('Required'),
          scoreHome: Yup.number()
            .moreThan(MIN_INPUT_NUMBER)
            .integer()
            .required('Required'),
          scoreAway: Yup.number()
            .moreThan(MIN_INPUT_NUMBER)
            .integer()
            .required('Required'),
          isFriendly: Yup.bool().required('Required')
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <FormItem>
                <input
                  id="homeTeam"
                  placeholder="Enter home team"
                  type="text"
                  value={values.homeTeam}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.homeTeam && touched.homeTeam && (
                  <div>{errors.homeTeam}</div>
                )}
              </FormItem>
              <FormItem>
                <input
                  id="awayTeam"
                  placeholder="Enter away team"
                  type="text"
                  value={values.awayTeam}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.awayTeam && touched.awayTeam && (
                  <div>{errors.awayTeam}</div>
                )}
              </FormItem>
              <FormItem>
                <input
                  id="scoreHome"
                  placeholder="Enter home team score"
                  type="number"
                  value={values.scoreHome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.scoreHome && touched.scoreHome && (
                  <div>{errors.scoreHome}</div>
                )}
              </FormItem>
              <FormItem>
                <input
                  id="scoreAway"
                  placeholder="Enter away team score"
                  type="number"
                  value={values.scoreAway}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.scoreAway && touched.scoreAway && (
                  <div>{errors.scoreAway}</div>
                )}
              </FormItem>
              <CheckboxContainer>
                <label htmlFor="isFriendly">Friendly game</label>
                <input
                  id="isFriendly"
                  type="checkbox"
                  value={values.isFriendly}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CheckboxContainer>
              <Button type="submit" width="200px" disabled={!isValid}>
                ADD GAME
              </Button>
              {successMessage && (
                <SuccessContainer>
                  <p>DODANO MECZ!</p>
                  <Button onClick={addedSuccessToggle}>Add another</Button>
                  <Button onClick={() => history.push('/')}>See games</Button>
                </SuccessContainer>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(AddGame);
