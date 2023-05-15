import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import * as S from '@app/components/profile/profileCard/profileFormNav/nav/notifications/Notifications/Notifications.styles';
import { PatientsTable } from '@app/components/patients/PatientsTable';
import { PatientForm } from '@app/components/patients/PatientForm';

export const Patients: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseCard>
      <BaseButtonsForm.Item>
        <BaseButtonsForm.Title>{t('patients.table.title')}</BaseButtonsForm.Title>
      </BaseButtonsForm.Item>
      <S.Description>{t('profile.nav.patients.description')}</S.Description>
      <PatientsTable />
      <PatientForm />
    </BaseCard>
  );
};