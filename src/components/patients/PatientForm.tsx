import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { Col, DatePicker, Row, TimePicker } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '@app/components/forms/StepForm/StepForm.styles';
import TextArea from 'antd/es/input/TextArea';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const PatientForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  const timeSuffixSelector = (
    <BaseForm.Item name="suffix" noStyle>
      <S.Select>
        <Option value="am">AM</Option>
        <Option value="pm">PM</Option>
      </S.Select>
    </BaseForm.Item>
  );

  return (
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      name="validateForm"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={
        <BaseButtonsForm.Item>
          <BaseButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
    >
      <Row className="general-info" gutter={[{ xs: 4, sm: 6, md: 10, lg: 14 }, 10]}>
        <Col className="gutter-row" span={24}>
          <BaseButtonsForm.Title>{t('patients.form.infoSection')}</BaseButtonsForm.Title>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={4}>
          <BaseButtonsForm.Item
            name="code"
            label={t('patients.form.fields.code')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="name"
            label={t('patients.form.fields.name')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="sex"
            label={t('patients.form.fields.sex')}
            hasFeedback
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseSelect placeholder={t('patients.form.fields.sex')}>
              <Option value="male">{t('forms.stepFormLabels.male')}</Option>
              <Option value="female">{t('forms.stepFormLabels.female')}</Option>
            </BaseSelect>
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="phone"
            label={t('patients.form.fields.phone')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="email"
            label={t('patients.form.fields.email')}
            rules={[
              {
                required: true,
                type: 'email',
                message: t('common.notValidEmail'),
              },
            ]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
      </Row>
      <Row className="appointment-info" gutter={[{ xs: 4, sm: 6, md: 10, lg: 14 }, 10]}>
        <Col className="gutter-row" span={24}>
          <BaseButtonsForm.Title>{t('patients.form.appointmentSection')}</BaseButtonsForm.Title>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="appointDate"
            label={t('patients.form.fields.appointDate')}
            rules={[
              {
                required: true,
                message: t('common.requiredField'),
              },
            ]}
          >
            <DatePicker />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item name="firstName" label={t('patients.form.fields.firstName')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="requestDate"
            label={t('patients.form.fields.requestDate')}
            rules={[
              {
                required: true,
                message: t('common.requiredField'),
              },
            ]}
          >
            <DatePicker />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={5}>
          <BaseButtonsForm.Item
            name="appointmentStatus"
            label={t('patients.form.fields.appointmentStatus')}
            hasFeedback
            rules={[{ required: true, message: t('forms.validationFormLabels.countryError') }]}
          >
            <BaseSelect placeholder={t('forms.validationFormLabels.selectCountry')}>
              <Option value="china">{t('patients.statues.pending')}</Option>
              <Option value="usa">{t('patients.statues.passed')}</Option>
              <Option value="usa">{t('patients.statues.missed')}</Option>
              <Option value="usa">{t('patients.statues.rescheduled')}</Option>
            </BaseSelect>
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={4}>
          <BaseButtonsForm.Item name="appointmentTime" label={t('patients.form.fields.appointmentTime')}>
            {/*<BaseInput addonAfter={timeSuffixSelector} />*/}
            <TimePicker format="HH:mm:A" />
            {/*<DateTime />*/}
          </BaseButtonsForm.Item>
        </Col>
      </Row>
      <Row className="address-info" gutter={[{ xs: 4, sm: 6, md: 10, lg: 14 }, 10]}>
        <Col className="gutter-row" span={24}>
          <BaseButtonsForm.Title>{t('patients.form.addressSection')}</BaseButtonsForm.Title>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
          <BaseButtonsForm.Item name="address" label={t('patients.form.fields.address')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
          <BaseButtonsForm.Item name="city" label={t('patients.form.fields.city')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
      </Row>
      <Row className="notes-info" gutter={[{ xs: 4, sm: 6, md: 10, lg: 14 }, 10]}>
        <Col className="gutter-row" span={24}>
          <BaseButtonsForm.Title>{t('patients.form.noteSection')}</BaseButtonsForm.Title>
        </Col>
        <Col className="gutter-row" xs={12} sm={10} md={9} lg={9}>
          <BaseButtonsForm.Item name="beforeAppointment" label={t('patients.form.fields.beforeAppointment')}>
            <TextArea />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="gutter-row" xs={12} sm={10} md={9} lg={9}>
          <BaseButtonsForm.Item name="afterAppointment" label={t('patients.form.fields.afterAppointment')}>
            <TextArea />
          </BaseButtonsForm.Item>
        </Col>
      </Row>
    </BaseButtonsForm>
  );
};