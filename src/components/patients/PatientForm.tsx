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
import {Col, Row } from 'antd';

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
      <Row gutter={[5, 5]}>
        <Col className="col-1">
          <BaseButtonsForm.Item name="code" label={t('patients.form.fields.code')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-3">
          <BaseButtonsForm.Item name="name" label={t('patients.form.fields.name')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-2">
          <BaseButtonsForm.Item
            name="sex"
            label={t('patients.form.fields.sex')}
            hasFeedback
            rules={[{ required: true, message: t('forms.validationFormLabels.countryError') }]}
          >
            <BaseSelect placeholder={t('forms.validationFormLabels.selectCountry')}>
              <Option value="china">{t('forms.validationFormLabels.china')}</Option>
              <Option value="usa">{t('forms.validationFormLabels.usa')}</Option>
            </BaseSelect>
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-2">
          <BaseButtonsForm.Item name="phone" label={t('patients.form.fields.phone')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
        <Col className="col-2">
          <BaseButtonsForm.Item name="email" label={t('patients.form.fields.email')}>
            <BaseInput />
          </BaseButtonsForm.Item>
        </Col>
      </Row>

      {/*<BaseButtonsForm.Item name="checkbox-group" label={t('forms.validationFormLabels.checkboxGroup')}>*/}
      {/*  <BaseCheckbox.Group>*/}
      {/*    <BaseRow>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="A">A</BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="B" disabled>*/}
      {/*          B*/}
      {/*        </BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="C">C</BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="D">D</BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="E">E</BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*      <BaseCol span={8}>*/}
      {/*        <BaseCheckbox value="F">F</BaseCheckbox>*/}
      {/*      </BaseCol>*/}
      {/*    </BaseRow>*/}
      {/*  </BaseCheckbox.Group>*/}
      {/*</BaseButtonsForm.Item>*/}

      {/*<BaseButtonsForm.Item name="rate" label={t('forms.validationFormLabels.rate')}>*/}
      {/*  <BaseRate />*/}
      {/*</BaseButtonsForm.Item>*/}

      {/*<BaseButtonsForm.Item*/}
      {/*  name="upload"*/}
      {/*  label={t('forms.validationFormLabels.upload')}*/}
      {/*  valuePropName="fileList"*/}
      {/*  getValueFromEvent={normFile}*/}
      {/*>*/}
      {/*  <BaseUpload name="logo" action="/upload.do" listType="picture">*/}
      {/*    <BaseButton type="default" icon={<UploadOutlined />}>*/}
      {/*      {t('forms.validationFormLabels.clickToUpload')}*/}
      {/*    </BaseButton>*/}
      {/*  </BaseUpload>*/}
      {/*</BaseButtonsForm.Item>*/}

      {/*<BaseButtonsForm.Item label={t('forms.validationFormLabels.dragger')}>*/}
      {/*  <BaseButtonsForm.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>*/}
      {/*    <BaseUpload.Dragger name="files" action="/upload.do">*/}
      {/*      <p>*/}
      {/*        <InboxOutlined />*/}
      {/*      </p>*/}
      {/*      <p>{t('forms.validationFormLabels.clickToDrag')}</p>*/}
      {/*      <p>{t('forms.validationFormLabels.supportSingle')}</p>*/}
      {/*    </BaseUpload.Dragger>*/}
      {/*  </BaseButtonsForm.Item>*/}
      {/*</BaseButtonsForm.Item>*/}
      {/*  */}
    </BaseButtonsForm>
  );
};