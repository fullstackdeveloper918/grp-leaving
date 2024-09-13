// src/components/MultiStepForm.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Steps, message, Checkbox } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SolutionOutlined, FileDoneOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons';
// import { FormData } from '../types/FormData';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo, updateContactInfo, updateEducationSkills, updateProjects, updateJobPreferences, updateReferences, updateAgreement } from '../lib/features/formSlice';
const { Step } = Steps;

const MultiStepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm<any>();
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form);
  console.log(formData,"formData");
  useEffect(() => {
    // Load form data into the form
    form.setFieldsValue({
        step1: formData.personalInfo?.step1,
        step2: formData.contactInfo?.step2,
        step3: formData.educationSkills?.step3,
        step4: formData.projects?.step4,
        step5: formData.jobPreferences?.step5,
        step6: formData.references?.step6,
        // Add other steps as needed
      });
  }, [formData, form]);
  const next = () => {
    form
      .validateFields()
      .then(values => {
        switch (current) {
          case 0:
            dispatch(updatePersonalInfo(values));
            break;
          case 1:
            dispatch(updateContactInfo(values));
            break;
          case 2:
            dispatch(updateEducationSkills(values));
            break;
          case 3:
            dispatch(updateProjects(values));
            break;
          case 4:
            dispatch(updateJobPreferences(values));
            break;
          case 5:
            dispatch(updateReferences(values));
            break;
          case 6:
            dispatch(updateAgreement(values));
            break;
          default:
            break;
        }
        setCurrent(current + 1);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const prev = () => {
     setCurrent(current - 1);  
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Form submitted successfully!');
  };
 
  

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Steps current={current} style={{ marginBottom: '20px' }}>
        <Step title="Personal Info" icon={<UserOutlined />} />
        <Step title="Contact Info" icon={<MailOutlined />} />
        <Step title="Education & Skills" icon={<SolutionOutlined />} />
        <Step title="Projects" icon={<FileDoneOutlined />} />
        <Step title="Job Preferences" icon={<TeamOutlined />} />
        <Step title="References" icon={<CheckCircleOutlined />} />
        <Step title="Confirmation" icon={<CheckCircleOutlined />} />
      </Steps>

      <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      {current === 0 && (
        <>
          <Form.Item
            name={['step1', 'name']}
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your name" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step1', 'age']}
            label="Age"
            rules={[{ required: true, message: 'Please input your age!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input type="number" placeholder="Enter your age" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step1', 'gender']}
            label="Gender"
            rules={[{ required: true, message: 'Please select your gender!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your gender" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step1', 'address']}
            label="Address"
            rules={[{ required: true, message: 'Please input your address!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your address" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step1', 'city']}
            label="City"
            rules={[{ required: true, message: 'Please input your city!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your city" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step1', 'country']}
            label="Country"
            rules={[{ required: true, message: 'Please input your country!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your country" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 1 && (
        <>
          <Form.Item
            name={['step2', 'email']}
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your email" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step2', 'phone']}
            label="Phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your phone number" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step2', 'alternatePhone']}
            label="Alternate Phone"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter alternate phone number" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step2', 'skypeId']}
            label="Skype ID"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your Skype ID" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step2', 'linkedinProfile']}
            label="LinkedIn Profile"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your LinkedIn profile URL" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step2', 'facebookProfile']}
            label="Facebook Profile"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your Facebook profile URL" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 2 && (
        <>
          <Form.Item
            name={['step3', 'education']}
            label="Education"
            rules={[{ required: true, message: 'Please input your education!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your education" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step3', 'experience']}
            label="Experience"
            rules={[{ required: true, message: 'Please input your experience!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your experience" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step3', 'skills']}
            label="Skills"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your skills" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step3', 'certifications']}
            label="Certifications"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your certifications" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step3', 'languages']}
            label="Languages"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter languages you know" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 3 && (
        <>
          <Form.Item
            name={['step4', 'projectTitle']}
            label="Project Title"
            rules={[{ required: true, message: 'Please input the project title!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter project title" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step4', 'projectDescription']}
            label="Project Description"
            rules={[{ required: true, message: 'Please input the project description!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input.TextArea rows={4} placeholder="Enter project description" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step4', 'technologiesUsed']}
            label="Technologies Used"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter technologies used" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step4', 'projectLink']}
            label="Project Link"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter project link" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 4 && (
        <>
          <Form.Item
            name={['step5', 'preferredJobTitle']}
            label="Preferred Job Title"
            rules={[{ required: true, message: 'Please input your preferred job title!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your preferred job title" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step5', 'desiredSalary']}
            label="Desired Salary"
            rules={[{ required: true, message: 'Please input your desired salary!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your desired salary" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step5', 'jobLocation']}
            label="Job Location"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your preferred job location" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step5', 'availability']}
            label="Availability"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter your availability" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 5 && (
        <>
          <Form.Item
            name={['step6', 'referenceName']}
            label="Reference Name"
            rules={[{ required: true, message: 'Please input the reference name!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter reference name" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step6', 'referenceContact']}
            label="Reference Contact"
            rules={[{ required: true, message: 'Please input the reference contact!' }]}
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter reference contact" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name={['step6', 'referenceRelationship']}
            label="Reference Relationship"
            style={{ marginBottom: '15px' }}
          >
            <Input placeholder="Enter relationship with reference" style={{ borderRadius: '4px' }} />
          </Form.Item>
        </>
      )}

      {current === 6 && (
        <>
          <Form.Item
            name={['step7', 'terms']}
            valuePropName="checked"
            style={{ marginBottom: '15px' }}
          >
            <Checkbox>I agree to the terms and conditions</Checkbox>
          </Form.Item>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        {current > 0 && (
          <Button style={{ margin: '0 8px', backgroundColor: '#f0f0f0', border: '1px solid #d9d9d9', color: '#000' }} onClick={prev}>
            Previous
          </Button>
        )}
        {current < 6 && (
          <Button type="primary" onClick={next} style={{ margin: '0 8px' }}>
            Next
          </Button>
        )}
        {current === 6 && (
          <Button type="primary" htmlType="submit" style={{ margin: '0 8px' }}>
            Submit
          </Button>
        )}
      </div>
    </Form>
    </div>
  );
};

export default MultiStepForm;
