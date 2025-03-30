import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { Field, Form } from "formik";

export const ProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileImageSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e0e0e0;
`;

export const EditIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: ${COLORS.mindShaft};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  transition: all 0.2s ease;

  &:hover {
    background: ${COLORS.rhino};
    transform: scale(1.05);
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: normal;
  color: ${COLORS.mindShaft};
`;

export const StyledFormField = styled(Field)`
  padding: 20px;
  border: 1px solid #dfeaf2;
  border-radius: 1rem;
  font-size: 16px;
  color: ${COLORS.shipCove};

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
  }
`;

export const Error = styled.div`
  color: #f44336;
  font-size: 14px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background-color: ${COLORS.mindShaft};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;
  width: 190px;
  &:hover {
    background-color: ${COLORS.rhino};
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
