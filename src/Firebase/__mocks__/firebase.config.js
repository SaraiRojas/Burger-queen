/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
const user = {
  uid: 'Uex8d8iH4gVLdL5KVMH5G0mFDEA3',
};
export const getAuth = (app) => user;
export const onAuthStateChanged = () => Promise.resolve(user);
export const doc = (db, collection, docId) => ({ db, collection, docId });
export const getDoc = jest.fn(
  () => {
    const info = {
      data: () => {
        const data = {
          role: 'Admin',
          name: 'Laura',
          lastname: 'Roa',
        };

        return data;
      },
    };

    return Promise.resolve(info);
  },
);
