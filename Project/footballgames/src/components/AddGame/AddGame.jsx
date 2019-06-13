import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { MIN_INPUT_NUMBER } from '../../utils/constants/formsUtils';
import Button from '../Button/Button';

const AddGame = () => (
  <div>
    <Formik
      initialValues={{
        homeTeam: '',
        awayTeam: '',
        scoreHome: '',
        scoreAway: '',
        isFriendly: false
      }}
      onSubmit={async values => {
        // todo TUTAJ MOŻE JAKIŚ TRY - CATCH I KOMUNIKAT, ŻE GIT DODANE (STATE?)
        await axios.post('http://localhost:4000/api/matches/new/', values);
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
          <form className="newGameForm" onSubmit={handleSubmit}>
            <div className="formItem">
              <label className="formLabel" htmlFor="homeTeam">
                Home team
              </label>
              <input
                className="formInput"
                id="homeTeam"
                placeholder="Enter home team"
                type="text"
                value={values.homeTeam}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              {errors.homeTeam && touched.homeTeam && (
                <div className="inputError">{errors.homeTeam}</div>
              )}
            </div>
            <div className="formItem">
              <label className="formLabel" htmlFor="awayTeam">
                Away team
              </label>
              <input
                className="formInput"
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
            </div>
            <div className="formItem">
              <label className="formLabel" htmlFor="awayTeam">
                Home team score
              </label>
              <input
                className="formInput"
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
            </div>
            <div className="formItem">
              <label className="formLabel" htmlFor="scoreHome">
                Away team score
              </label>
              <input
                className="formInput"
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
            </div>
            <div className="formItem">
              <label className="formLabel" htmlFor="isFriendly">
                Friendly game
              </label>
              <input
                className="formInput"
                id="isFriendly"
                type="checkbox"
                value={values.isFriendly}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <Button width="200px" disabled={!isValid}>
              ADD GAME
            </Button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default withRouter(AddGame);
