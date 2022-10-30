import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import {createHeroAction} from '../../actions/actionCreators';

const HeroForm = ({ createHero, powers}) => {
    const initialValues = {
        nickname: '',
        realName: '',
        originDescription: '',
        catchPhrase: '',
        image: '',
        superpowers: []
    };

    const handleSubmit = (values, formikBag) => {
        const formData = new FormData();
        formData.append('nickname', values.nickname);
        formData.append('realName', values.realName);
        formData.append('originDescription',values.originDescription);
        formData.append('catchPhrase', values.catchPhrase);
        formData.append('image', values.image); // server: multer req.file
        values.superpowers.forEach(s => formData.append('superpowers', s));
        createHero(formData);
        formikBag.resetForm();
    }

    const mapPowers = i => (
        <label key={i.id}>
            <Field type="checkbox" name="superpowers" value={String(i.id)} />
            <span>{i.description}</span>
        </label>
    );

    const setHeroImage = ({target: {files}}, setImage) => {
        setImage('image', files[0]);
    };

    return( 
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {formikProps =>(
            <Form>
                <label>
                    <span>nickname hero</span>
                    <Field type="text" name='nickname' />
                </label>
                <label>
                    <span>real name hero</span>
                    <Field type="text" name='realName' />
                </label>
                <label>
                    <span>origin description hero</span>
                    <Field type="text" name='originDescription' />
                </label>
                <br />
                <label>
                    <span>catch phrase hero</span>
                    <Field type="text" name='catchPhrase' />
                </label>
                <br />
                <label>
                    <span>hero photo</span>
                    <input type="file" name="image" 
                    onChange={ e => {setHeroImage(e, formikProps.setFieldValue);
                    }}
                    />
                </label>
                <br/>
                {powers.map(mapPowers)}
                <br/>
                <button type="submit">Send data</button>
            </Form>
        )}
    </Formik>);
};

const mapStateToProps = ({powersData: {powers}}) => ({powers}); 

const mapDispatchToProps = dispatch => ({
    createHero: data => dispatch(createHeroAction(data)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);



