import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import { createNewProject, getAllProjects, onOpenModal, onUpdateModalStatus } from './actions';
import { InitialState, Reducer } from './actions/reducer';
import { IProjectProps } from './types';
import './styles.css';
import { RegisterProjectModal } from '../../components/RegisterProjectModal';
import { IFormValues } from '../../components/RegisterProjectModal/types';
import { toast } from 'react-toastify';
import { createFormatProvider } from '../../services/providers/factories';

export const Project: React.FC<IProjectProps> = (props: IProjectProps) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const fetchProjects = useCallback(() => getAllProjects()(dispatch), []);

  console.log()

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleButtonClick = () => onOpenModal()(dispatch);

  const updateModalStatus = (status: boolean) => onUpdateModalStatus(status)(dispatch);

  const onModalFormSubmit = async (values: IFormValues) => {
    const result = await createNewProject(values)(dispatch);
    if (!result) {
      return;
    }

    toast.success('Projeto cadastrado com sucesso!');
    fetchProjects();
  };

  const formatProvider = useMemo(() => createFormatProvider(), []);
  const convertedMoney = useMemo(() => (cents: number) => (cents !== undefined
    ? formatProvider.formatPrice(cents)
    : formatProvider.formatPrice(0)), []);


  return (
    <>
      <div className='d-flex flex-column'>
        <div className="align-self-end">
          <button className="new-btn mb-3" type="button" onClick={handleButtonClick}>
            <i className="bi bi-plus-lg me-1"></i>
            NOVO PROJETO
          </button>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='list-group'>
              {state.projects.records.map((project) => (
                <a href="" className='project-item list-group-item list-group-item-action py-4'>
                  <div className='row align-items-center justify-content-center'>
                    <div className='col-2'>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/4257/4257674.png'
                        className='img-fluid project-image'
                      />
                    </div>
                    <div className='col-8'>
                      <div className='d-flex w-100 justify-content-between'>
                        <h5 className="mb-1 fw-bold">{project.name}</h5>
                        <small>{convertedMoney(project.price)}</small>
                      </div>
                      <small className='description-text d-inline-block text-truncate'>
                        <strong className='fw-semibold'>Descrição: </strong>
                        {project.description}
                      </small>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RegisterProjectModal
        loading={state.loading}
        isVisible={state.isModalOpen}
        onModalClose={() => updateModalStatus(false)}
        onFormSubmit={onModalFormSubmit}
      />
    </>
  );
};
