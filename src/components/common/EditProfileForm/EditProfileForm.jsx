import { Formik } from "formik";
import { userData } from "../../../constants/userData";
import {
  EditIcon,
  Error,
  FormField,
  FormGroup,
  FormRow,
  Label,
  ProfileForm,
  ProfileImage,
  ProfileImageContainer,
  ProfileImageSection,
  StyledFormField,
  SubmitButton,
} from "./styles";
import { Col, Container, Row } from "../../gridsystem";
import { FiEdit2 } from "react-icons/fi";
import { FORM_FIELDS } from "../../../constants/settingFormFields";
import { groupFieldsIntoRows } from "../../../utils/groupFieldsIntoRows";

const OptimizedFormGroup = ({ errors, touched }) => {
  const fieldRows = groupFieldsIntoRows(FORM_FIELDS);
  return (
    <FormGroup>
      {fieldRows.map((row, rowIndex) => (
        <FormRow key={`row-${rowIndex}`}>
          {row.map((field) => (
            <FormField key={field.name}>
              <Label>
                {field.label}
                {field.required && <span style={{ color: "red" }}>*</span>}
              </Label>
              <StyledFormField
                name={field.name}
                type={field.type}
                required={field.required}
              />
              {errors[field.name] && touched[field.name] && (
                <Error>{errors[field.name]}</Error>
              )}
            </FormField>
          ))}
        </FormRow>
      ))}
    </FormGroup>
  );
};

const EditProfileForm = ({ handleImageChange, schema, handleSubmit }) => {
  return (
    <Formik
      initialValues={userData}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <ProfileForm>
          <Container fluid>
            <Row>
              <Col sm={12} md={2}>
                <ProfileImageSection>
                  <ProfileImageContainer>
                    <ProfileImage src={userData.profileImage} alt="Profile" />
                    <EditIcon
                      onClick={() =>
                        document.getElementById("profileImageUpload").click()
                      }
                    >
                      <FiEdit2 size={14} />
                    </EditIcon>
                    <input
                      id="profileImageUpload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </ProfileImageContainer>
                </ProfileImageSection>
              </Col>
              <Col sm={12} md={10}>
                <OptimizedFormGroup errors={errors} touched={touched} />
              </Col>
            </Row>
          </Container>

          <SubmitButton type="submit">Save</SubmitButton>
        </ProfileForm>
      )}
    </Formik>
  );
};

export default EditProfileForm;
