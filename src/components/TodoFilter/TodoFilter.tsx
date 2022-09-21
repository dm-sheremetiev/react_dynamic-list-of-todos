import React from 'react';

type Props = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  setSelectedQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedQuery: string;
};

export const TodoFilter: React.FC<Props> = ({
  setSelectedFilter,
  setSelectedQuery,
  selectedQuery,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={e => setSelectedFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={selectedQuery}
        onChange={e => setSelectedQuery(e.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {selectedQuery && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setSelectedQuery('')}
          />
        </span>
      )}
    </p>
  </form>
);
