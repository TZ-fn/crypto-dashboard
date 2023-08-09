import getLinkFromDescription from './getLinkFromDescription';

const validDescription = 'Lorem ipsum dolor sit amet https://www.google.com';
const validDescription2 = 'Lorem ipsum dolor sit amet www.google.com';
const validDescription3 = 'Lorem ipsum dolor sit amet google.com';

// error case, the address misses dot before the
const invalidDescription = 'Lorem ipsum dolor sit amet www.googlecom';

describe('getLinkFromDescription', () => {
  it('retrieves the address correctly', () => {
    expect(getLinkFromDescription(validDescription)).toEqual(
      <>
        {'Lorem ipsum dolor sit amet '}
        <a className='underline' href={'https://www.google.com'}>
          www.google.com
        </a>
      </>,
    );
  });

  it('retrieves the address without the https protocol correctly', () => {
    expect(getLinkFromDescription(validDescription2)).toEqual(
      <>
        {'Lorem ipsum dolor sit amet '}
        <a className='underline' href={'www.google.com'}>
          www.google.com
        </a>
      </>,
    );
  });

  it('retrieves the address without the www prefix correctly', () => {
    expect(getLinkFromDescription(validDescription3)).toEqual(
      <>
        {'Lorem ipsum dolor sit amet '}
        <a className='underline' href={'google.com'}>
          google.com
        </a>
      </>,
    );
  });

  it('shows the no valid address error correctly', () => {
    expect(getLinkFromDescription(invalidDescription)).toEqual(
      <>
        {'Lorem ipsum dolor sit amet www.googlecom'}
        {'Address not available.'}
      </>,
    );
  });
});
