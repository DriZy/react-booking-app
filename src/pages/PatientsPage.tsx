import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { Patients } from '@app/components/patients/Patients';

const PatientsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('patients.pageTitle')}</PageTitle>
      <Patients />
    </>
  );
};

export default PatientsPage;