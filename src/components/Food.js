import React from 'react';

export default function Food() {
  return (
    /* 식료품 */
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 className="uk-card-title">식 료 품</h3>
        <div
          className="uk-grid"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"
        >
          <ul
            className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-text-center"
            data-uk-grid
          >
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="">
                      <img src="김치.png" alt="항목1"/>
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="#">
                      <img src="김치.png" />
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="#">
                      <img src="김치.png" />
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="#">
                      <img src="김치.png" />
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="#">
                      <img src="김치.png" />
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid-match uk-grid-small" data-uk-grid>
                <div className="uk-text-center uk-text-secondary">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabIndex={0}
                  >
                    <a href="#">
                      <img src="김치.png" />
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p className="uk-h4 uk-margin-remove uk-text-secondary">
                          김치
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    /* //식료품 */
  );
}
