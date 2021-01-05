import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenService
      ]
    });
    service = TestBed.get(TokenService);

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTokenKey', () => {
    it('should return token key', () => {
      localStorage.setItem('id_token', '12345');
      expect(service.getTokenKey('id_token')).toEqual('12345');
    });
  });

  describe('setTokenKey', () => {
    it('should set key, value into localStorage', () => {
      service.setTokenKey('id_token', '12345');
      expect(localStorage.getItem('id_token')).toEqual('12345');
    });
  });

  describe('removeTokenKey', () => {
    it('should remove key/value from localStorage', () => {
      localStorage.clear();
      localStorage.setItem('id', '12345');
      expect(localStorage.getItem('id')).toEqual('12345');

      service.removeTokenKey('id');
      expect(store).toEqual({});
    });
  });
});

