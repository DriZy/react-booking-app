import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { notificationController } from '@app/controllers/notificationController';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { Col, DatePicker, Row } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '@app/components/forms/StepForm/StepForm.styles';
import TextArea from 'antd/es/input/TextArea';
import { DateTime } from '@app/components/common/BaseArticle/BaseArticle.styles';

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
      <Row className="general-info" gutter={[5, 5]}>
        <BaseButtonsForm.Title>{t('patients.form.infoSection')}</BaseButtonsForm.Title>
        <Col className="col-1">
          <BaseButtonsForm.Item
            name="code"
            label={t('patients.form.fields.code')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-3">
          <BaseButtonsForm.Item
            name="name"
            label={t('patients.form.fields.name')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-2">
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
        <Col className="col-2">
          <BaseButtonsForm.Item
            name="phone"
            label={t('patients.form.fields.phone')}
            rules={[{ required: true, message: t('common.requiredField') }]}
          >
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-2">
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
      <Row className="appointment-info" gutter={[5, 5]}>
        <BaseButtonsForm.Title>{t('patients.form.appointmentSection')}</BaseButtonsForm.Title>
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
        <BaseButtonsForm.Item name="firstName" label={t('patients.form.fields.firstName')}>
          <BaseInput />
        </BaseButtonsForm.Item>
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

        <BaseButtonsForm.Item name="phone" label={t('patients.form.fields.appointmentTime')}>
          {/*<BaseInput addonAfter={timeSuffixSelector} />*/}
          <DateTime />
        </BaseButtonsForm.Item>
      </Row>
      <Row className="address-info" gutter={[5, 5]}>
        <BaseButtonsForm.Title>{t('patients.form.addressSection')}</BaseButtonsForm.Title>
        <BaseButtonsForm.Item name="address" label={t('patients.form.fields.address')}>
          <BaseInput />
        </BaseButtonsForm.Item>
        <BaseButtonsForm.Item name="city" label={t('patients.form.fields.city')}>
          <BaseInput />
        </BaseButtonsForm.Item>
      </Row>
      <Row className="notes-info" gutter={[5, 5]}>
          <BaseButtonsForm.Title  className="col-12">{t('patients.form.noteSection')}</BaseButtonsForm.Title>
        <BaseRow className="col-12">
          <BaseButtonsForm.Item name="beforeAppointment" label={t('patients.form.fields.beforeAppointment')}>
            <TextArea />
          </BaseButtonsForm.Item>
          <BaseButtonsForm.Item name="afterAppointment" label={t('patients.form.fields.afterAppointment')}>
            <TextArea />
          </BaseButtonsForm.Item>
        </BaseRow>
      </Row>
    </BaseButtonsForm>
  );
};