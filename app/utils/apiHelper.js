import { call, put } from 'redux-saga/effects';
import { BASE_URL } from 'containers/App/constants';
import history from 'utils/history';
import { requestJSON, request } from './request';
class API {
  static dataLoader(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const baseUrl = BASE_URL;
      let requestURL = '';
      if (/^https?:\/\//i.test(apiUri)) {
        requestURL = apiUri;
      } else {
        requestURL = `${baseUrl}${apiUri}`;
      }
      try {
        let options;
        if (data !== undefined) {
          options = {
            method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
            body: data ? JSON.stringify(data) : '',
            headers: {
              // 'Content-Type': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
              Authorization: token !== undefined ? token : '', // ? `${usertoken}` : undefined
            },
          };
        } else {
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              // 'Access-Control-Allow-Origin': '*',
              Authorization: token !== undefined ? token : '', // ? `${usertoken}` : undefined
            },
          };
        }
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, data, metaData, ...actionArguments));
      } catch (err) {
        let error;
        try {
          error = yield call(() => err.response.json());
        } catch (a) {
          error = {
            code: a.response,
            msg: a.response || err.message,
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static get(apiUri, onSuccess, onError, token, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      undefined,
      token,
      'GET',
      ...actionArguments,
    );
  }

  /*
   * Shorthand POST function
   */
  static post(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = 'post',
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }

  /*
   * Shorthand PUT function
   */
  static put(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = 'put',
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }

  static delete(apiUri, onSuccess, onError, token, ...actionArguments) {
    return function*() {
      const requestURL = `${apiUri}`;
      try {
        const options = {
          method: 'DELETE',
          headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
            Authorization: token !== undefined ? token : '', // ? `${usertoken}` : undefined
          },
        };
        const response = yield call(get, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          let error;
          error = {
            errors: [
              {
                code: e.response,
                msg: e.response,
              },
            ],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static multipartPost(
    apiUri,
    onSuccess,
    onError,
    data,
    document,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    // eslint-disable-next-line func-names
    return function*() {
      const requestURL = `${BASE_URL}${apiUri}`;
      const multipartData = new FormData();
      // multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < document.length; i++) {
          multipartData.append('file', document[i]);
        }
      } else {
        multipartData.append('file', document);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            processData: false,
            // 'Content-Type': 'multipart/form-data',
            contentType: false,
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (e) {
        let error;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          error = {
            status: e.response,
            message: e.response,
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static async getData(apiUri, token = '') {
    try {
      const baseUrl = BASE_URL;
      let requestURL = '';
      if (/^https?:\/\//i.test(apiUri)) {
        requestURL = apiUri;
      } else {
        requestURL = `${baseUrl}${apiUri}`;
      }

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      };
      let status;
      const response = await fetch(requestURL, options)
        .then(res => {
          status = res.status;
          return res.json();
        })
        .then(data => ({ ...data, status }));
      if (status === 401) {
        localStorage.removeItem('token');
        history.push('/');
        window.location.reload();
      }
      return response;
    } catch (err) {
      console.error(err, 'server error', apiUri);
      return err;
    }
  }
}

export default API;
