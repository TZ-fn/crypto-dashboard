const getLinkFromDescription = (defaultDescription: string) => {
  const addressRegex =
    /(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,12}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

  const link = (href: string, address: string) => {
    return (
      <a className='underline' href={href}>
        {address}
      </a>
    );
  };

  const description = defaultDescription.replace(addressRegex, '');
  const addressMatch = defaultDescription.match(addressRegex);

  const href = addressMatch !== null ? addressMatch[0] : null;
  const address =
    addressMatch !== null ? addressMatch[0].replace(/(https|http)?(:\/+)?(\/\.+)?/g, '') : null;

  return (
    <>
      {description}
      {href && address ? link(href, address) : 'Address not available.'}
    </>
  );
};

export default getLinkFromDescription;
